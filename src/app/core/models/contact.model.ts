export interface Contact {
    id: number;
    photoUrl: string | null;
    prefix?: string
    firstName: string;
    lastName?: string;
    suffix?: string;
    companyName?: string;
    jobTitle?: string;
    email?: string;
    phone?: string;
    addresses?: Address[];
    birthday?: Date;
    events?: Event[];
    notes?: string;
    website?: string;
    relationship?: string;
    chat?: string;
    internetCall?: string;
    nickname?: string;
    favorite: boolean;
    lastContacted: Date;
    inTrash?: boolean;
    labels: Label[];
    color: string;
}

export interface Email {
    email: string;
    type: string;
}

export interface Phone {
    country: string;
    phoneNumber: string;
    type: string;
}

export interface Address {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    poBox?: string;
    type?: string;
}

export interface Event {
    eventDate: string;
    eventCategory: string;
}

export interface Label {
    label: string;
    labelId: number;
}