// 1'den 10'a kadar yazdırma

for (let i=1; i<=10; i++) {

    console.log(i);

}

// 1'den 10'a kadar çiftleri yazdırma

for (let i=0; i<=10; i=i+2) {

    console.log(i);
}

// 1'den 10'a kadar artacak tekler de tek çiftlerde çift yazdırma
for(let i=1; i<=10; i++) {

    if(i%2==1) {
        console.log("Tek");
    } else {
        console.log("Çift");
    }

}

// 50'den 1'e kadar yazdırma ve toplamlarını yazdırma
let toplam=0;
for(let i=50; i>=1; i--) {

    toplam+=i;
    console.log(i);
}
console.log(toplam);




for (let t=0; t<=50; t++) {

   console.log(t);
}

for (let tolga=1; tolga<=10; tolga++) {

    if(tolga%2==1) {
        console.log("Tek");
    }
    else {
        console.log("Çift");
    }
}
