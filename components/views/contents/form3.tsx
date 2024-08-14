'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import useDebounce from '@/lib/useDebounce';
import { Textarea } from '@/components/ui/textarea';
import { Sample3Data } from '../pages/sample3';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const Form3 = (props: { data: Sample3Data; onChange: (value: Sample3Data) => void }) => {
  const { data, onChange } = props;
  const [dataForm, setDataForm] = useState<Sample3Data>(data);

  const eventTitle = useDebounce(dataForm.eventTitle, 500);
  const eventLocation = useDebounce(dataForm.eventLocation, 500);
  const descValue = useDebounce(dataForm.description, 500);

  useEffect(() => {
    onChange({ eventTitle: eventTitle, eventLocation: eventLocation, description: descValue, invitees: dataForm.invitees });
  }, [descValue, eventLocation, eventTitle, JSON.stringify(dataForm.invitees)]);

  return (
    <ScrollArea>
      <div className='flex flex-col gap-4 p-6'>
        <div>
          <Label>Nama Acara</Label>
          <Input
            placeholder='Judul'
            value={dataForm.eventTitle}
            onChange={(e) => {
              setDataForm((state) => ({ ...state, eventTitle: e.target.value }));
            }}
          />
        </div>
        <div>
          <Label>Lokasi</Label>
          <Input
            placeholder='Sub Judul'
            value={dataForm.eventLocation}
            onChange={(e) => {
              setDataForm((state) => ({ ...state, eventLocation: e.target.value }));
            }}
          />
        </div>
        <div>
          <Label>Keterangan</Label>
          <Textarea
            placeholder='Deskripsi'
            rows={5}
            value={dataForm.description}
            onChange={(e) => {
              setDataForm((state) => ({ ...state, description: e.target.value }));
            }}
          />
        </div>
        <div className='mt-3  flex justify-between'>
          attendees :
          <Button
            variant='default'
            onClick={() => {
              setDataForm((state) => ({ ...state, invitees: state.invitees.concat([{ id: state.invitees.length, name: '' }]) }));
            }}
          >
            + Add
          </Button>
        </div>
        <div>
          {dataForm.invitees.map((item, idx) => (
            <div key={item.id} className='flex w-full items-center gap-2 my-3'>
              <Input
                placeholder='Nama'
                value={item.name}
                onChange={(e) => {
                  const newList = [...dataForm.invitees];
                  const current = newList.find((el) => el.id === item.id);
                  if (current) {
                    current.name = e.target.value;
                  }
                  setDataForm((state) => ({ ...state, invitees: newList }));
                }}
              />
              <Button
                variant='default'
                onClick={() => {
                  setDataForm((state) => ({ ...state, invitees: state.invitees.filter((el) => el.id !== item.id) }));
                }}
              >
                X
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Form3;
