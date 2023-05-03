import { Schema } from "mongoose"

export enum DokumentTip {
    LICNA, PASOS 
}

export enum ZahtevTip {
    NOV, IZGUBLJEN, DETE
}

export interface Req {
    id: string,
    datum: string,
    zahtevTip: ZahtevTip,
    dokumentTip: DokumentTip,
    korisnikId: string
}

export const ReqSchema = new Schema <Req> ({
    id: {type: String, required: true},
    datum: {type: String, required: true},
    zahtevTip: {type: Number, required: true},
    dokumentTip: {type: Number, required: true},
    korisnikId: {type: String, required: true}
})