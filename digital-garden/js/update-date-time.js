function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB');
    //GB (Great Britain) formaat voor 24 uur klok
    document.getElementById('currentTime').textContent = timeString;

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString(['nl', 'en-GB'], dateOptions);
    document.getElementById('currentDate').textContent = dateString;
}
updateDateTime();
setInterval(updateDateTime, 1000);