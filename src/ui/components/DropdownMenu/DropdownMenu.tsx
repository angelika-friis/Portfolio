import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';
import { Stack, Text } from '../primitives';
import styles from './DropdownMenu.module.css';

type DropdownOption<Value extends string> = {
  value: Value;
  label: string;
};

type DropdownMenuProps<Value extends string> = {
  label: string;
  title: string;
  options: DropdownOption<Value>[];
  selectedValue: Value;
  onSelect: (value: Value) => void;
  triggerAriaLabel?: string;
  className?: string;
  icon: ReactNode;
};

type DropdownMenuOptionsProps<Value extends string> = {
  options: DropdownOption<Value>[];
  selectedValue: Value;
  onSelect: (value: Value) => void;
};

function getContainerClassName(className?: string) {
  return className ? `${styles.container} ${className}` : styles.container;
}

function getOptionClassName(isSelected: boolean) {
  return isSelected ? `${styles.option} ${styles.selected}` : styles.option;
}

function useDismissDropdown(
  isOpen: boolean,
  containerRef: RefObject<HTMLDivElement | null>,
  onDismiss: () => void,
) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        onDismiss();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, isOpen, onDismiss]);
}

function DropdownMenuOptions<Value extends string>({
  options,
  selectedValue,
  onSelect,
}: DropdownMenuOptionsProps<Value>) {
  return (
    <div className={styles.options}>
      {options.map((option) => {
        const isSelected = option.value === selectedValue;

        return (
          <button
            aria-checked={isSelected}
            className={getOptionClassName(isSelected)}
            key={option.value}
            onClick={() => onSelect(option.value)}
            role="menuitemradio"
            type="button"
          >
            <Text as="span">{option.label}</Text>
          </button>
        );
      })}
    </div>
  );
}

export function DropdownMenu<Value extends string>({
  label,
  title,
  options,
  selectedValue,
  onSelect,
  triggerAriaLabel,
  className,
  icon,
}: DropdownMenuProps<Value>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsOpen(false);
  const selectOption = (value: Value) => {
    onSelect(value);
    closeMenu();
  };

  useDismissDropdown(isOpen, containerRef, closeMenu);

  return (
    <div className={getContainerClassName(className)} ref={containerRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={triggerAriaLabel}
        className={styles.trigger}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <Stack direction="horizontal" align="center">
          {icon && icon}
          <Text as="span">{label}</Text>
        </Stack>
      </button>

      {isOpen ? (
        <div className={styles.menu} role="menu">
          <div className={styles.header}>
            <Text as="span">{title}</Text>
          </div>
          <DropdownMenuOptions
            options={options}
            selectedValue={selectedValue}
            onSelect={selectOption}
          />
        </div>
      ) : null}
    </div>
  );
}
