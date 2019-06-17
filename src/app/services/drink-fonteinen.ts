

    export interface FieldAliases {
        OBJECTID: string;
        Objecttype: string;
        Type_drinkfontein: string;
        Ligging: string;
        Straatnaam: string;
        Huisnummer: string;
        Aanvulling: string;
        District: string;
        Postcode: string;
        Objectcode: string;
    }

    export interface SpatialReference {
        wkid: number;
        latestWkid: number;
    }

    export interface Field {
        name: string;
        type: string;
        alias: string;
        length?: number;
    }

    export interface Attributes {
        OBJECTID: number;
        Objecttype: string;
        Type_drinkfontein: string;
        Ligging: string;
        Straatnaam: string;
        Huisnummer: string;
        Aanvulling: string;
        District: string;
        Postcode: string;
        Objectcode: string;
    }

    export interface Geometry {
        x: number;
        y: number;
    }

    export interface Feature {
        attributes: Attributes;
        geometry: Geometry;
    }

    export interface RootObject {
        displayFieldName: string;
        fieldAliases: FieldAliases;
        geometryType: string;
        spatialReference: SpatialReference;
        fields: Field[];
        features: Feature[];
    }


