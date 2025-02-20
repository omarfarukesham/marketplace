import { AUTH_VIEW_MODES } from '@/app/_config/constants';
import { EMAIL_INVALID_MESSAGE, EMAIL_REQUIRED_MESSAGE, PASSWORD_REQUIRED_MESSAGE } from '@/app/_config/validations';
import { fireEvent, render, renderHook, screen } from '@/test/utilities';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import LoginForm from './login-form';

describe('Login', () => {
  const { result } = renderHook(() => useState(AUTH_VIEW_MODES.login));

  render(<LoginForm closeAuthModal={vi.fn} setAuthViewMode={result.current[1]} />);

  const loginForm = screen.getByRole('form');

  it('should render a form', () => {
    expect(loginForm).toBeInTheDocument();
  });

  it('should show required error', async () => {
    fireEvent.submit(loginForm);

    expect(await screen.findByText(EMAIL_REQUIRED_MESSAGE)).toBeInTheDocument();
    expect(await screen.findByText(PASSWORD_REQUIRED_MESSAGE)).toBeInTheDocument();
  });

  it('should show email/phone error', async () => {
    const emailOrPhoneInput = screen.getByPlaceholderText('Username');

    fireEvent.change(emailOrPhoneInput, { target: { value: 'a' } });

    expect(emailOrPhoneInput).toHaveValue('a');

    fireEvent.submit(loginForm);

    expect(await screen.findByText(EMAIL_INVALID_MESSAGE)).toBeInTheDocument();
  });
});
