var gaji = 4500000;
var transport = 10000*24;
var infak = 50000;
var bpjs = 250000;
var potongan = gaji*2.5/100;
var totalpotongan = bpjs+infak+potongan;
var hasil = gaji-totalpotongan+transport;

console.log("Gaji Kotor : Rp." + gaji);
console.log("============================");
console.log("Potongan BPJS : " + bpjs);
console.log("Potongan Infak : "  + infak);
console.log("Potongan Pajak  2,5% : Rp." + potongan);
console.log("============================");
console.log("Total potongan : " + totalpotongan);
console.log("============================");
console.log("Tunjangan transport 10000");
console.log("Total hari kerja 24 hari ");
console.log("============================");
console.log("Total tunjangan : Rp. " + transport );
console.log("============================");
console.log("Perhitungan gaji :");
console.log("(Gaji kotor - Potongan) + Tunjangan (4500000-412500) + 240000");
console.log("============================");
console.log("Gaji bersih : Rp. " + hasil);

