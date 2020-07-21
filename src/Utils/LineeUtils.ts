import { TipoAttivita } from "../types/TipoAttivita";

export const tipiAttivita : Array<TipoAttivita> = 
    [
       {id :1, text:  "SetUp", color: "#7DA7D9", borderColor : undefined, hasBorder : false, shouldBorderBlink: false},
       {id :2, text:  "Attrezzaggio", color: "#ffb600", borderColor: undefined, hasBorder: false, shouldBorderBlink: false},
       {id :3, text:  "Produzione", color: "#8DC73F", borderColor: undefined, hasBorder: false, shouldBorderBlink: false},
       {id :4, text:  "SetUp mancanza attrezzisti", color: "#7DA7D9", hasBorder: true, borderColor: "#FF5757", shouldBorderBlink: false},
       {id :5, text:  "Attrezzaggio mancanza attrezzisti", color: "#ffb600", hasBorder: true, borderColor: "#FF5757", shouldBorderBlink: true },
       {id :6, text:  "Produzione non sicura", color: "#8DC73F", hasBorder:true, borderColor:"#FF5757" ,shouldBorderBlink: false },
       {id :7, text:  "SetUp non sicuro", color: "#7DA7D9", hasBorder: true, borderColor : "#FF5757", shouldBorderBlink: false },
       {id :8, text:  "Attrezzaggio non sicuro", color: "#ffb600", hasBorder: true, borderColor: "#FF5757", shouldBorderBlink: false},
       {id :9, text:  "Produzione in ritardo consegna	", color: "#FF8B00", hasBorder: false, borderColor:undefined, shouldBorderBlink: false},
       {id :10, text:  "Produzione	in ritardo consegna	non sicura", color: "#FF8B00", hasBorder: true, borderColor: "#FF5757", shouldBorderBlink: false},
       {id :11, text:  "Attrezzisti OK", color: "#8DC73F", hasBorder: false, borderColor: undefined, shouldBorderBlink: false},
       {id :12, text:  "Attrezzisti non bastano", color: "#FF5757", hasBorder: false, borderColor: undefined, shouldBorderBlink: false},
       {id :13, text:  "", color: "#f96610", hasBorder: false, borderColor: undefined, shouldBorderBlink: false},
       {id :14, text:  "", color: "#85ce23", hasBorder: false, borderColor: undefined, shouldBorderBlink: false},
       {id :15, text:  "", color: "#70c078", hasBorder: false, borderColor: undefined, shouldBorderBlink: false},
       {id :16, text:  "", color: "#70c078", hasBorder: false, borderColor: undefined, shouldBorderBlink: false},
    ]


