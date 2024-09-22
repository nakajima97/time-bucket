import { act, renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';
import { useAgeInput } from './index';

describe('useAgeInput', () => {
	it('初期状態では年齢がundefinedであること', () => {
		const { result } = renderHook(() => useAgeInput());
		expect(result.current.age).toBeUndefined();
	});

	it('handleChangeで年齢を更新できること', () => {
		const { result } = renderHook(() => useAgeInput());

		act(() => {
			result.current.handleChange({
				target: { value: '30' },
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.age).toBe(30);
	});

	it('空の入力で年齢をundefinedに設定できること', () => {
		const { result } = renderHook(() => useAgeInput());

		act(() => {
			result.current.handleChange({
				target: { value: '' },
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.age).toBeUndefined();
	});

	it('setAgeで年齢を直接設定できること', () => {
		const { result } = renderHook(() => useAgeInput());

		act(() => {
			result.current.setAge(25);
		});

		expect(result.current.age).toBe(25);
	});
});
