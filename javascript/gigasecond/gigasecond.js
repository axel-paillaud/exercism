//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
    console.log(date);
    let initDate = new Date(date);
    let timestamp = Math.floor(initDate.getTime() / 1000);
    timestamp += 1000000000;
    timestamp *= 1000;
    console.log("timestamp : " + timestamp);
    let newDate = new Date(Math.floor(timestamp));
    console.log("new date : " + newDate);

    return new Date(timestamp);
};
