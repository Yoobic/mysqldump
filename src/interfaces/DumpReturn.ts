import Table from './Table'

export default interface DumpReturn {
    /**
     * The result of the dump
     */
    dump : {
        /**
         * The concatenated SQL schema dump for the entire database.
         * Null if configured not to dump.
         */
        schema : string | null,
        /**
         * The concatenated SQL data dump for the entire database.
         * Null if configured not to dump.
         */
        data : string | null,
    },
    tables : Table[],
}