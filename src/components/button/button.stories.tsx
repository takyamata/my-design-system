import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

// Meta情報
const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' }, // クリックイベントのログ
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// プライマリボタン
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};

// セカンダリボタン
export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        children: 'Tertiary Button',
        variant: 'tertiary',
    },
};
export const Transparent: Story = {
    args: {
        children: 'Transparent Button',
        variant: 'transparent',
    },
};

// 無効状態のボタン
export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        variant: 'primary',
        disabled: true,
    },
};
