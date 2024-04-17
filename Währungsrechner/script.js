function calc() {
    let euro = eurofeld.value;
    let result = euro * 1.06;
    usd.value = result.toFixed(1).replace('.', ',');
}