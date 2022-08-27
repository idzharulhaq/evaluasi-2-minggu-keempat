// soal 1
let formatphone = () => {
    formatphone(0, 8, 5, 4, 5, 6, 7, 8, 9, 0)
    console.log(formatphone)
}

// soal 2
// a.
function hitunggaji(namakaryawan,jumlahabsen) {
    
}

// b.
let log = [
    {
        nama: 'huda',
        jabatan: 'kepala chef',
        gajiperhari: 'Rp.100.000',
        absen: '2 hari',
        totalgaji: '28000000'
    },
    {
        nama: 'abdullah',
        jabatan: 'assistant chef',
        gajiperhari: 'Rp.90000',
        absen: '3 hari',
        totalgaji: '24300000'
    },
    {
        nama: 'imran',
        jabatan: 'kasir',
        gajiperhari: 'Rp.50.000',
        absen: '1 hari',
        totalgaji: '14500000'
    },
    {
        nama: 'fajar',
        jabatan: 'pelayan',
        gajiperhari: 'Rp.50.000',
        absen: '1 hari',
        totalgaji: '14500000'
    }
]

let data = []
console.table(log)

// soal 3
function orderpizza(type, name) {
    console.log('pizzaordered...')
    console.log('pizza is for prepation')
    setTimeout(function () {
        let msg = `your ${type} ${name} pizza is ready! the total bill is $13`
        console.log(`on the pizzahub server ${msg}`)
        },300);
}


