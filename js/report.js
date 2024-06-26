import {getAllOfficesCodeAndCity,getAllOficesFromSpainCityAndMovil}from "./module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven,getBossFullNameAndEmail,
    getAllFullNameNoSale} from "./module/employees.js";
import {getAllSpainClients,getAllMadridClients,getClientsAndEmployeesNames,
    getClientsWhoMadePayment, getClientsNoPayment, 
    getClientsWhoMadePaymentsCityAndEmployees,getClientsWhoHaventMadePaymentsAndTheyCity,
    getOfficeAddressOfClientsFromFuenlabrada} from "./module/clients.js";
import {getAllStatusRequest,getAllLateOrder,getAllRequestTwoDaysBefore,
    getAllRejectedOrder,getAllOrdersDeliveredInJanuary} from "./module/requests.js";
import {getAllPaymentsbyYear,getAllPymentType,getAllPayment} from "./module/payments.js";
import {getAllGammaOrnamentalesProduct} from "./module/products.js"
// import "./components/clock.js";
// import { getClientsEmploy } from "./module/clients.js";
// const queryAboutTable7 = document.querySelector("#queryAboutTable7");
// queryAboutTable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await getClientsEmploy();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del empleado: </b>${val.name_employee}</p>
//                         <p><b>Ciudad: </b>${val.city}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async(e) => {
    let [, report__container] = queryAboutTable1.children
    if (!report__container.innerHTML) {
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1;
        });
        report__container.innerHTML = plantilla;
    };
});

const queryAboutTable2 = document.querySelector("#queryAboutTable2");
queryAboutTable2.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable2.children
    if (!report__container.innerHTML) {
        let data = await getAllOficesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>ID: </b>${val.id}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                        <p><b>Telefono: </b>${val.movil}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})


const queryAboutTable3 = document.querySelector("#queryAboutTable3");
queryAboutTable3.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable3.children
    if (!report__container.innerHTML) {
        let data = await getAllEmployeesWithBossAndCodeSeven();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            //let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable4 = document.querySelector("#queryAboutTable4");   //Falta solucionar
queryAboutTable4.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable4.children
    if (!report__container.innerHTML) {
        let data = await getBossFullNameAndEmail();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>E-mail: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1;
        });
        report__container.innerHTML = plantilla;
    };
});

const queryAboutTable5 = document.querySelector("#queryAboutTable5");
queryAboutTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable5.children
    if (!report__container.innerHTML) {
        let data = await getAllFullNameNoSale();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
});

const queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable6.children
    if (!report__container.innerHTML) {
        let data = await getAllSpainClients();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Pais: </b>${val.pais}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
});

const queryAboutTable7 = document.querySelector("#queryAboutTable7");
queryAboutTable7.addEventListener("click", async (e) =>{
    let [,report__container] = queryAboutTable7.children;
    if (!report__container.innerHTML) {
        let data = await getAllStatusRequest();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val => {
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Estado: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        })
        report__container.innerHTML = plantilla;
    }
})


const queryAboutTable8 = document.querySelector("#queryAboutTable8");
queryAboutTable8.addEventListener("click", async(e) =>{
    let [,report__container] = queryAboutTable8.children;
    if (!report__container.innerHTML) {
        let data = await getAllPaymentsbyYear(2008);
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val =>{
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código: </b>${val.code_client}</p>
                        <p><b>Total: </b>${val.total}</p>
                        <p><b>Fecha: </b>${val.year}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        })
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable9 = document.querySelector("#queryAboutTable9");
queryAboutTable9.addEventListener("click", async(e) =>{
    let [,report__container] = queryAboutTable9.children;
    if (!report__container.innerHTML) {
        let data = await getAllLateOrder();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val =>{
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código Pedido: </b>${val.Codigo_pedido}</p>
                        <p><b>Código Cliente: </b>${val.Codigo_cliente}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha Entregada: </b>${val.Fecha_entregada}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        });
        report__container.innerHTML = plantilla;
    };
});


const queryAboutTable10 = document.querySelector("#queryAboutTable10");
queryAboutTable10.addEventListener("click", async(e) =>{
    let [,report__container] = queryAboutTable10.children;
    if (!report__container.innerHTML) {
        let data = await getAllRequestTwoDaysBefore();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val =>{
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código Pedido: </b>${val.Codigo_pedido}</p>
                        <p><b>Código Cliente: </b>${val.Codigo_cliente}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha Entregada: </b>${val.Fecha_entregada}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        });
        report__container.innerHTML = plantilla;
    };
});


const queryAboutTable11 = document.querySelector("#queryAboutTable11");
queryAboutTable11.addEventListener("click", async(e) =>{
    let [,report__container] = queryAboutTable11.children;
    if (!report__container.innerHTML) {
        let data = await getAllRejectedOrder(2009);
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val =>{
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código Pedido: </b>${val.Codigo_pedido}</p>
                        <p><b>Fecha Pedido: </b>${val.Fecha_pedido}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Comentario: </b>${val.Comentario}</p>
                        <p><b>Codigo Cliente: </b>${val.Codigo_cliente}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        });
        report__container.innerHTML = plantilla;
    };
});


const queryAboutTable12 = document.querySelector("#queryAboutTable12");
queryAboutTable12.addEventListener("click", async(e) =>{
    let [,report__container] = queryAboutTable12.children;
    if (!report__container.innerHTML) {
        let data = await getAllOrdersDeliveredInJanuary();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val =>{
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código Pedido: </b>${val.Codigo_pedido}</p>
                        <p><b>Fecha Pedido: </b>${val.Fecha_pedido}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Comentario: </b>${val.Comentario}</p>
                        <p><b>Codigo Cliente: </b>${val.Codigo_cliente}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        });
        report__container.innerHTML = plantilla;
    };
});


const queryAboutTable13 = document.querySelector("#queryAboutTable13");
queryAboutTable13.addEventListener("click", async(e) =>{
    let [,report__container] = queryAboutTable13.children;
    if (!report__container.innerHTML) {
        let data = await getAllPymentType(2008);
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val =>{
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo Cliente: </b>${val.code_client}</p>
                        <p><b>Total: </b>${val.total}</p>
                        <p><b>Año: </b>${val.year}</p>
                        <p><b>Tipo de Pago: </b>${val.tipo_de_pago}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        });
        report__container.innerHTML = plantilla;
    };
});


const queryAboutTable14 = document.querySelector("#queryAboutTable14");
queryAboutTable14.addEventListener("click", async (e) =>{
    let [,report__container] = queryAboutTable14.children;
    if (!report__container.innerHTML) {
        let data = await getAllPayment();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val => {
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Estado: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
            i+= 1;
        })
        report__container.innerHTML = plantilla;
    }
})