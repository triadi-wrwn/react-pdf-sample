'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import useDebounce from '@/lib/useDebounce';
import { Textarea } from '@/components/ui/textarea';
import { Sample2Data } from '../pages/sample2';

const Form2 = (props: { data: Sample2Data; onChange: (value: Sample2Data) => void }) => {
  const { data, onChange } = props;
  const [dataForm, setDataForm] = useState<Sample2Data>(data);

  const titleValue = useDebounce(dataForm.title, 500);
  const subtitleValue = useDebounce(dataForm.subtitle, 500);
  const descValue = useDebounce(dataForm.description, 500);

  useEffect(() => {
    onChange({ title: titleValue, subtitle: subtitleValue, description: descValue });
  }, [descValue, subtitleValue, titleValue]);

  return (
    <div className='flex flex-col gap-4 p-6'>
      <div>
        <Label>Judul</Label>
        <Input
          placeholder='Judul'
          value={dataForm.title}
          onChange={(e) => {
            setDataForm((state) => ({ ...state, title: e.target.value }));
          }}
        />
      </div>
      <div>
        <Label>Sub Judul</Label>
        <Input
          placeholder='Sub Judul'
          value={dataForm.subtitle}
          onChange={(e) => {
            setDataForm((state) => ({ ...state, subtitle: e.target.value }));
          }}
        />
      </div>
      <div>
        <Label>Deskripsi</Label>
        <Textarea
          placeholder='Deskripsi'
          rows={20}
          value={dataForm.description}
          onChange={(e) => {
            setDataForm((state) => ({ ...state, description: e.target.value }));
          }}
        />
      </div>
    </div>
  );
};

export default Form2;
