export interface tipogeojson {
    type:      string;
    generator: string;
    copyright: string;
    timestamp: Date;
    features:  Feature[];
}

export interface Feature {
    type:       FeatureType;
    properties: { [key: string]: string };
    geometry:   Geometry;
    id:         string;
}

export interface Geometry {
    type:        GeometryType;
    coordinates: number[];
}

export enum GeometryType {
    Point = "Point",
}

export enum FeatureType {
    Feature = "Feature",
}
