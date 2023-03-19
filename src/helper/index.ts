import { formatBalance as format } from "@polkadot/util"
import { $purify } from "@kodadot1/minipfs"

export function shortAddress(
    address: string,
    begin?: number,
    end?: number
  ): string {
    begin = begin ? begin : 6
    end = end ? end : -6
  
    if (address) {
      return `${address.slice(0, begin)}...${address.slice(end)}`
    }
    return ''
}

export function formatBalance(amount?: bigint | string) {
    const value = BigInt(amount || BigInt(0));
    const magic = format(value, { decimals: 12, forceUnit: '-', withZero: false, withUnit: false });
    const intl = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: 'KSM',
      useGrouping: false,
    });
    return intl.format(Number(magic)).replace(',', '.');
}

export function sanitizeUri(uri?: string) {
    return uri ? $purify(uri).at(0) : ''
  }