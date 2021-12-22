export const dateNow = (date) => {
  const Year = date.getFullYear();
  const Month = date.getMonth();
  const Day = date.getDate();
  const Hour = date.getHours();
  const Minutes = date.getMinutes();

  let fMonth = "";
  let fHour = "";
  let fMinutes = "";

  switch (Minutes) {
    case 0:
      fMinutes = "00";
      break;
    case 1:
      fMinutes = "01";
      break;
    case 2:
      fMinutes = "02";
      break;
    case 3:
      fMinutes = "03";
      break;
    case 4:
      fMinutes = "04";
      break;
    case 5:
      fMinutes = "05";
      break;
    case 6:
      fMinutes = "06";
      break;
    case 7:
      fMinutes = "07";
      break;
    case 8:
      fMinutes = "08";
      break;
    case 9:
      fMinutes = "09";
      break;
    default:
      fMinutes = Minutes;
      break;
  }

  switch (Hour) {
    case 0:
      fHour = "00";
      break;
    case 1:
      fHour = "01";
      break;
    case 2:
      fHour = "02";
      break;
    case 3:
      fHour = "03";
      break;
    case 4:
      fHour = "04";
      break;
    case 5:
      fHour = "05";
      break;
    case 6:
      fHour = "06";
      break;
    case 7:
      fHour = "07";
      break;
    case 8:
      fHour = "08";
      break;
    case 9:
      fHour = "09";
      break;
    default:
      fHour = Hour;
      break;
  }

  switch (Month) {
    case 0:
      fMonth = "01";
      break;
    case 1:
      fMonth = "02";
      break;
    case 2:
      fMonth = "03";
      break;
    case 3:
      fMonth = "04";
      break;
    case 4:
      fMonth = "05";
      break;
    case 5:
      fMonth = "06";
      break;
    case 6:
      fMonth = "07";
      break;
    case 7:
      fMonth = "08";
      break;
    case 8:
      fMonth = "09";
      break;
    case 9:
      fMonth = "10";
      break;
    case 10:
      fMonth = "11";
      break;
    case 11:
      fMonth = "12";
      break;
    default:
      fMonth = Month;
      break;
  }

  const dateFormat =
    Day + "." + fMonth + "." + Year + " " + fHour + ":" + fMinutes;

  return dateFormat;
};
