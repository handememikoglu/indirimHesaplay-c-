// İndirim Hesaplama

const ürünler = [
    {
        ürün: "Gömlek",
        fiyat: 500
    },
    {
        ürün: "Kazak",
        fiyat: 600
    },
    {
        ürün: "Pantolon",
        fiyat: 800
    },
    {
        ürün: "elbise",
        fiyat: 1000
    }
];
let indirimHesaplama = 0;
let sonFiyat = 0;
console.log(ürünler);

const indirim = Number(prompt("İndirim Oranını giriniz."));
console.log(indirim);

if(indirim < 0 || indirim >= 100){
     alert("Geçersiz indirim oranı!!");
}else{
    const yeni = [];
    for (let i = 0; i < ürünler.length; i++) {
        indirimHesaplama = (ürünler[i].fiyat * indirim) / 100;
        sonFiyat = ürünler[i].fiyat - indirimHesaplama;
        yeni.push({
            ürün: ürünler[i],
            fiyat: ürünler[i].fiyat,
            İndirimli: sonFiyat

        });
        
        
    }
    console.log(yeni);
}
