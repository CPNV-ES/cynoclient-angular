import { Consultation } from '../consultation-report/consultation';

export interface Service {
    id: number,
    moment: Date,
    duration: number,
    type: String,
    description: String,
    street: String,
    idLocality: number,
    consultations: Consultation[],
}