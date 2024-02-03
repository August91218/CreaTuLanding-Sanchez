const products = [
    {
        id: 1,
        name: "NVIDIA RTX 2060",
        image: "https://asset.msi.com/resize/image/global/product/product_2_20190709133733_5d24281d3a78c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 561,
        stock: 1,
        description: "High Dose Rate (HDR) Brachytherapy of Liver using Palladium 103 (Pd-103)"
    },
    {
        id: 2,
        name: "Ryzen 5 5800X",
        image: "https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%207%205800X%204.7GHz%2032MB%20Zen3%20AM4/113632935e5149029426a0c61d8a8a6e.webp",
        price: 306,
        stock: 2,
        description: "Transplantation of Left Ovary, Syngeneic, Open Approach"
    },
    {
        id: 3,
        name: "Monitor Samsung LF24T350FHLCZB 24",
        image: "https://logg.api.cygnus.market/static/logg/Global/Monitor%20Samsung%20LF22T350FHLCZB%2024%22%20FHD%201080p%2075Hz%20LED%20IPS%20FreeSync/ab59214833014a2fb26a8402f6dc5d34.webp",
        price: 524,
        stock: 3,
        description: "Reattachment of Duodenum, Percutaneous Endoscopic Approach"
    },
    {
        id: 4,
        name: "Gabinete Thermaltake V250 Tg ",
        image: "https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_08-03-2023-02-03-35-1.png",
        price: 669,
        stock: 4,
        description: "Transfer Right Hand Muscle, Open Approach"
    },
    {
        id: 5,
        name: "AMD Ryzen 5 7600 5.1GHz",
        image: "https://logg.api.cygnus.market/static/logg/Global/Procesador_AMD_Ryzen_5_7600_5.1GHz_32MB_Zen4_Gr_ficos_Radeon_AM5_c_Cooler/bf3c3cf3c28d4d5e8ad1a93df38cb69c.webp",
        price: 748,
        stock: 5,
        description: "Removal of Drainage Device from Penis, Percutaneous Approach"
    },
    {
        id: 6,
        name: "HYPERX FURY RGB 8GB 3466MHZ",
        image: "https://wiztech.com.ar/assets/images/products/ram/hyperx_fury_rgb_8gb_3466mhz_a.png",
        price: 254,
        stock: 6,
        description: "Inspection of Left Finger Phalangeal Joint, Percutaneous Endoscopic Approach"
    },
    {
        id: 7,
        name: "Fuente Pc Evga 500w 80 Plus",
        image: "https://www.sispar.com.py/imagenes/5920.png",
        price: 220,
        stock: 7,
        description: "Drainage of Bilateral Seminal Vesicles, Open Approach"
    },
    {
        id: 8,
        name: "DISCO SSD 480GB W.D. VERDE 2.5",
        image: "https://lezamapc.com.ar/25790-large_default/disco-ssd-480gb-western-digital-verde-25-545mb-s.jpg",
        price: 320,
        stock: 7,
        description: "Drainage of Bilateral Seminal Vesicles, Open Approach"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    })
}
export function getProductsById(id){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id;
            }));
            
        }, 500);
    });
};
