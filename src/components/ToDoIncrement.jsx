import React, { useState } from 'react';
// let counter = 0;

function ToDoIncrement() {
    // sekarang kita menggunakan useState untuk deklarasi counter
    // pada saat deklarasi, kita menggunakan array
    // indeks 0 adalah nama variabel yang ingin dideklarasikan
    // indeks 1 adalah nama fungsi yang digunakan untuk memutasi (mengganti) variabel
    const [counter, setCounter] = useState(0);

    // Kita deklarasi fungsi ketika tombol ditekan
    function buttonNambahClickHandler() {
        console.log(counter);
        // di sini karena kita ketahui bahwa setIncrement adalah fungsi
        // untuk memutasi (mengubah) si increment menjadi nilai baru
        setCounter(counter + 1);
    }

    return (
        <>
            <div>{counter}</div>
            <div>
                {/* Di sini kita deklarasi onClick untuk menambahkan event ketika tombol diklik */}
                <button onClick={buttonNambahClickHandler}>Tambah</button>
            </div>
        </>
    );
}

export default ToDoIncrement;