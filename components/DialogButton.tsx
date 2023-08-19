import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type DialogButtonType = {
  buttonLabel: String;
  dialogTitle: String;
  dialogDescription: String;
  dialogButtonLabel?: String;
  buttonVariant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
  children?: React.ReactNode;
  mutationFn?: () => void;
};

export function DialogButton({
  buttonLabel,
  buttonVariant = 'default',
  dialogTitle,
  dialogDescription,
  dialogButtonLabel,
  children,
  mutationFn,
}: DialogButtonType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{buttonLabel}</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {children}
        {!!dialogButtonLabel && (
          <DialogFooter>
            <Button
              type='submit'
              onClick={() => (mutationFn ? mutationFn() : null)}
            >
              {dialogButtonLabel}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
