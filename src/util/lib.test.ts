import { shortenWalletAddress } from './lib'

describe('shortenWalletAddress', () => {
    it('should return empty string if address empty', () => {
        expect(shortenWalletAddress('')).toBe('')
    })

    it('should return shortened address', () => {
        expect(
            shortenWalletAddress('G1GJ7ZJ6JZJ6JZJ6JZJ6JZJ6JZJ6JZJ6JZJ6JZJ6JZ')
        ).toBe('G1GJ...J6JZ')
        expect(shortenWalletAddress('G1GJ7ZJ6')).toBe('')
    })
})
