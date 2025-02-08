'use client'

// component
import { Button } from '@heroui/button'
import { Drawer, DrawerContent, DrawerHeader } from '@heroui/drawer'
import { Select, SelectItem } from '@heroui/select'
import { useDisclosure } from '@heroui/use-disclosure'

const lang = [
  { key: 'uk', label: 'uk' },
  { key: 'en', label: 'en' },
]

//component
const HomeComponent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // return
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100px',
          backgroundColor: 'red',
          zIndex: 100,
        }}
      >
        <Button variant={'bordered'} onPress={onOpen}>
          Btn open/close drawer (ui)
        </Button>

        <button style={{ border: '1px solid black' }} onClick={onOpen}>
          Btn open/close drawer (my)
        </button>

        <Select className='max-w-xs' label='Select an lang'>
          {lang.map((el) => (
            <SelectItem key={el.key}>{el.label}</SelectItem>
          ))}
        </Select>

        <p className={'text-3xl'}>Header</p>
      </div>

      <div className={'pt-80 text-3xl'}>Page</div>

      <Drawer isOpen={isOpen} placement={'top'} onOpenChange={onOpenChange}>
        <DrawerContent className={'pt-80'}>
          <DrawerHeader className='flex flex-col gap-1'>Menu</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default HomeComponent
