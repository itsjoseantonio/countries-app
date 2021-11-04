const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
};

const renderLangs = (country) => {
    const lang = [];
    if (country) {
        for (let key in country[0].languages) {
            lang.push(key);
        }
    }
    return lang.join(',');
};

export { formatNumber, renderLangs };
