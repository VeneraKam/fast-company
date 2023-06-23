function getTimeWord(number, type) {
  let text = "";
  if (number > 0) {
    switch (type) {
    case "minutes":
      text = number + " минут";
      if (
        number % 100 === 11 ||
          number % 100 === 12 ||
          number % 100 === 13 ||
          number % 100 === 14
      ) {
        text = number + " минут";
      } else if (number % 10 === 1) {
        text = number + " минуту";
      } else if (
        number % 10 === 2 ||
          number % 10 === 3 ||
          number % 10 === 4
      ) {
        text = number + " минуты";
      }
      break;
    case "hours":
      text = number + " часов";
      if (
        number % 100 === 11 ||
          number % 100 === 12 ||
          number % 100 === 13 ||
          number % 100 === 14
      ) {
        text = number + " часов";
      } else if (number % 10 === 1) {
        text = number + " час";
      } else if (
        number % 10 === 2 ||
          number % 10 === 3 ||
          number % 10 === 4
      ) {
        text = number + " часа";
      }
      break;
    case "days":
      text = number + " дней";
      if (
        number % 100 === 11 ||
          number % 100 === 12 ||
          number % 100 === 13 ||
          number % 100 === 14
      ) {
        text = number + " дней";
      } else if (number % 10 === 1) {
        text = number + " день";
      } else if (
        number % 10 === 2 ||
          number % 10 === 3 ||
          number % 10 === 4
      ) {
        text = number + " дня";
      }
      break;
    case "months":
      text = number + " месяцев";
      if (
        number % 100 === 11 ||
          number % 100 === 12 ||
          number % 100 === 13 ||
          number % 100 === 14
      ) {
        text = number + " месяцев";
      } else if (number % 10 === 1) {
        text = number + " месяц";
      } else if (
        number % 10 === 2 ||
          number % 10 === 3 ||
          number % 10 === 4
      ) {
        text = number + " месяца";
      }
      break;
    case "years":
      text = number + " лет";
      if (
        number % 100 === 11 ||
          number % 100 === 12 ||
          number % 100 === 13 ||
          number % 100 === 14
      ) {
        text = number + " лет";
      } else if (number % 10 === 1) {
        text = number + " год";
      } else if (
        number % 10 === 2 ||
          number % 10 === 3 ||
          number % 10 === 4
      ) {
        text = number + " года";
      }
      break;
    default:
      text = "только что";
      break;
    }
  }
  return text;
}

export function getDataText(date) {
  let strDate = "";
  const arrDate = [];

  const today = new Date();
  const timeDiffInMin = (today.getTime() - Number(date)) / 60000;

  let minutes = 0;
  if (timeDiffInMin < 60) {
    minutes = getTimeWord(Math.floor(timeDiffInMin), "minutes");
    arrDate.push(minutes);
  } else if (timeDiffInMin < 1440) {
    const hours = getTimeWord(Math.floor(timeDiffInMin / 60), "hours");
    minutes = getTimeWord(Math.floor(timeDiffInMin % 60), "minutes");
    if (hours !== "") {
      arrDate.push(hours);
    }
    arrDate.push(minutes);
  } else {
    const years = getTimeWord(
      Math.floor(timeDiffInMin / (60 * 24 * 365)),
      "years"
    );
    const months = getTimeWord(
      Math.floor((timeDiffInMin % (60 * 24 * 365)) / (60 * 24 * 30)),
      "months"
    );
    const days = getTimeWord(
      Math.floor(
        ((timeDiffInMin % (60 * 24 * 365)) % (60 * 24 * 30)) / (60 * 24)
      ),
      "days"
    );

    if (years !== "") {
      arrDate.push(years);
    }
    if (months !== "") {
      arrDate.push(months);
    }
    if (days !== "") {
      arrDate.push(days);
    }
  }
  if (arrDate.length === 1 && arrDate[0] === "") {
    strDate = "недавно";
  } else if (arrDate.length > 0) {
    strDate = arrDate.join(" ") + " назад";
  }
  return strDate;
}
