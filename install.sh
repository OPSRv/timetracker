#!/bin/bash
base_python_interpreter="/home/www/timetracker-deploy/env/bin/python3.9"
project_domain="31.172.65.172"
project_path=`pwd`

source env/bin/activate
source .env

sed -i "s~dbms_template_path~$project_path~g" nginx/site.conf systemd/gunicorn.service
sed -i "s~dbms_template_domain~$project_domain~g" nginx/site.conf src/timetracker/settings.py

sudo ln -s $project_path/nginx/site.conf /etc/nginx/sites-enabled/
sudo ln -s $project_path/systemd/gunicorn.service /etc/systemd/system/

sudo systemctl daemon-reload
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
sudo service nginx restart
