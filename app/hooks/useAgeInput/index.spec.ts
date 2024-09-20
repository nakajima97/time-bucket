import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect } from 'vitest';
import { useAgeInput } from '@/hooks/useAgeInput';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';

describe('useAgeInput', () => {
  it('localStorageから年齢が初期化できる', () => {
    localStorage.setItem(localStorageKeys.startAge, '25');

    const { result } = renderHook(() =>
      useAgeInput({ localStorageKey: localStorageKeys.startAge })
    );

    expect(result.current.age).toBe(25);
  });

  it('handleChangeで年齢を更新できる', () => {
    const { result } = renderHook(() =>
      useAgeInput({ localStorageKey: localStorageKeys.startAge })
    );

    act(() => {
      result.current.handleChange({
        target: { value: '30' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.age).toBe(30);
  });

  it('空の入力で年齢をundefinedに設定できる', () => {
    const { result } = renderHook(() =>
      useAgeInput({ localStorageKey: localStorageKeys.startAge })
    );

    act(() => {
      result.current.handleChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.age).toBeUndefined();
  });

  it('localStorageAgeを更新できる', () => {
    const { result } = renderHook(() =>
      useAgeInput({ localStorageKey: localStorageKeys.startAge })
    );

    act(() => {
      result.current.setLocalStorageAge('35');
    });

    expect(result.current.localStorageAge).toBe('35');
  });
});