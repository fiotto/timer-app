moment.tz.setDefault('Asia/Tokyo');
const params = (new URL(document.location)).searchParams;
const target = moment(params.get('time'), 'H:mm');

function setDisp() {
    const now = moment();
    
    const diff = target.diff(now)

    if (diff > 15 * 60 * 1000) {
        $('#diff-time').removeClass()
        $('#diff-time').addClass('purple');
    } else if (diff > 5 * 60 * 1000) {
        $('#diff-time').removeClass()
        $('#diff-time').addClass('brue');
    } else if (diff > 0) {
        $('#diff-time').removeClass()
        $('#diff-time').addClass('green');
    } else {
        $('#diff-time').removeClass()
        $('#diff-time').addClass('red');
    }

    
    const diffMoment = diff > 0 ? moment(diff).utc() : moment(-diff).utc();

    $('#diff-time').text(diffMoment.format('HH:mm:ss'))
}

setInterval(() => {
  setDisp();
}, 500);
