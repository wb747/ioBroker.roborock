export declare const cryptoEngine: {
    /**
     * Generates an RSA keypair if one does not already exist.
     */
    ensureRsaKeys(): {
        public: {
            n: string;
            e: string;
        };
        private: {
            n: string;
            e: string;
            d: string;
            p: string;
            q: string;
            dmp1: string;
            dmq1: string;
            coeff: string;
        };
    };
    encryptV1(payload: Buffer | string, localKey: string, ts: number): Buffer;
    decryptV1(payload: Buffer, localKey: string, ts: number): Buffer;
    encryptA01(payload: Buffer | string, localKey: string, random: number): Buffer;
    decryptA01(payload: Buffer, localKey: string, random: number): Buffer;
    encryptL01(payload: Buffer | string, localKey: string, ts: number, seq: number, random: number, connectNonce: number, ackNonce?: number): Buffer;
    decryptL01(payload: Buffer, localKey: string, ts: number, seq: number, random: number, connectNonce: number, ackNonce?: number): Buffer;
    /**
     * Encrypts a B01 payload.
     * Uses AES-128-CBC. The IV is derived from the message header random value and a specific salt.
     */
    encryptB01(payload: Buffer | string, localKey: string, ivInput: number): Buffer;
    /**
     * Decrypts a B01 payload.
     */
    decryptB01(payload: Buffer, localKey: string, ivInput: number): Buffer;
    /**
     * Derives the initialization vector (IV) for the B01 protocol.
     * The derivation uses MD5 on the hex-string representation of the input combined with a static salt.
     * Reference salt found in librrcodec.so.
     */
    deriveB01IV(ivInput: number): Buffer;
    encryptPassword(password: string, k: string): string;
};
