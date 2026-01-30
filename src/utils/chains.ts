// Chain and USDT configuration based on SDK configs
import { tokens, TokenConfig } from '@jimmygu/sfa-sdk-test';

export const getChainByKey = (key: string): TokenConfig | undefined => {
  return tokens.find((token) => token.contractAddress === key);
};

export const getChainsByType = (chainType: string): TokenConfig[] => {
  return tokens.filter((token) => token.chainType === chainType);
};

