import { Link } from "react-router-dom";
import './noMatch.scss'

const NoMatch = () => {
  return (
    <section className="page_404">
        <h1 className='error'>404</h1>
        <Link to="/"><span className="link_404">Go to the home page</span> </Link>

    </section>
  );
};
export default NoMatch;
