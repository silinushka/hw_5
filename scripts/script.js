const a = parseFloat(prompt('Введіть кількість годин', ' '));

if (Number.isNaN(a) || a < 0) {
    alert (`Неможлива кількість годин`)
}
else {
    const seconds = a * 3600
    alert (seconds)
}
