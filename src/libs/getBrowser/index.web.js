import CONST from '../../CONST';

/**
 * Fetch browser name from UA string
 *
 * @return {String} e.g. Chrome
 */
function getBrowser() {
    const {userAgent} = window.navigator;
    let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))/i) || [];
    let temp;

    if (/trident/i.test(match[1])) {
        return 'IE';
    }

    if (match[1] && (match[1].toLowerCase() === 'chrome')) {
        temp = userAgent.match(/\b(OPR)/);
        if (temp !== null) {
            return 'Opera';
        }

        temp = userAgent.match(/\b(Edg)/);
        if (temp !== null) {
            return 'Edge';
        }
    }

    match = match[1] ? match[1] : navigator.appName;
    return match;
}

/**
 * Get the Browser name
 * @returns {String}
 */
export default () => {
    const browser = getBrowser();
    return browser ? browser.toLowerCase() : CONST.BROWSER.OTHER;
};
