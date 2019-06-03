export function getAge (birthday) {
    birthday = new Date(birthday);
    const birth_month = birthday.getMonth();
    const birth_day = birthday.getDate();
    const birth_year = birthday.getFullYear();
    const today_date = new Date();
    const today_year = today_date.getFullYear();
    const today_month = today_date.getMonth();
    const today_day = today_date.getDate();
    const age = today_year - birth_year;

    if (today_month < (birth_month - 1)) {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
        age--;
    }
    return age;
}
