function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var object ={}
  for (var i=0; i<arrPenumpang.length; i++) {
    var namaInput = arrPenumpang[i][0]
    var lokasiAwal = arrPenumpang[i][1]
    var lokasiAkhir = arrPenumpang[i][2]
    
    object[namaInput] = {
      penumpang: namaInput,
      naikDari: lokasiAwal,
      tujuan: lokasiAkhir,
      harga: 0
    }
    for (var j=0; j<rute.length; j++){
    if (lokasiAwal === rute[j]) {
      var awal = j
    } else if (lokasiAkhir === rute[j]) {
      var akhir = j
    }
    }
    object[namaInput].harga = 2000 * (akhir - awal)
  }
  var values = Object.values(object)
  return values
}
  


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]