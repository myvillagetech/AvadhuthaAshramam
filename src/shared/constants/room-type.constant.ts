export const ROOM_TYPES = {
    SINGLE : 'SINGLE',
    DOUBLE : 'DOUBLE',
    TRIBLE : 'TRIBLE',
    HALL   : 'HALL'
}

export type IROOM_TYPES = typeof ROOM_TYPES[keyof typeof ROOM_TYPES];