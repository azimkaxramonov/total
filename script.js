
let companies = [
    {
        name: 'sheroz_io',
        budget: 75000,
        tax: 12,
        expensesPerYear: [5000, 3000, 25000]
    },
    {
        name: 'shavkat_mnogogovority',
        budget: 125000,
        tax: 14,
        expensesPerYear: [10000, 4500, 60000]
    },
    {
        name: 'kamoliddin_posuda',
        budget: 150000,
        tax: 12,
        expensesPerYear: [70000, 2000, 15000]
    },
    {
        name: 'azamat_niche',
        budget: 90000,
        tax: 7,
        expensesPerYear: [21000, 1000, 6000]
    },
    {
        name: 'muhammad',
        budget: 80000,
        tax: 14,
        expensesPerYear: [10000, 500, 1680]
    },
    {
        name: 'firuz_nosbiznes',
        budget: 195000,
        tax: 21,
        expensesPerYear: [7000, 15000, 5000]
    },
    {
        name: 'azim_trans_mchj',
        budget: 200000,
        tax: 12,
        expensesPerYear: [70000, 12000, 5000]
    },
    {
        name: 'malika_beaty_salon',
        budget: 150000,
        tax: 12,
        expensesPerYear: [40000, 5000, 7000]
    },
]
for (let bank of companies) {
    let expensesPerYear = bank.expensesPerYear.reduce((a, b) => a + b)



    let bud = Math.round(bank.budget / 12)



    let exp = Math.round(expensesPerYear / 12)


    let tax = Math.round(bud / 100 * bank.tax)


    let totalper = Math.round(exp + tax)


    let tatal = Math.round(exp * 100 / bud)
    console.log(tatal);




    document.write(`

${bank.name} расходы за месяц (включая налог)  ${totalper}<br>
${bank.name} расход за год ${expensesPerYear} разход за месяц ${exp} <br>
${bank.name} бьюджет за год ${bank.budget}  бьюджет за месяц ${bud}<br>
${bank.name} соотношение бьюджета и расходов показать ${tatal}<br> <hr>

`)


}


// найти расходы за месяц (включая налог)
// найти расходы за месяц
// найти бьюджет за месяц
// найти соотношение бьюджета и расходов показать
