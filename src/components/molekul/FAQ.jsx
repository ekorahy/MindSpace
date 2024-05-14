import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { getFaq } from '../../data/local/faq';
import { FAQItem } from './FAQItem';
import { LanguageContext } from '../../contexts/LanguageContext';

export const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setFaq(getFaq());
  }, []);

  return (
    <section className='my-10 scroll-mt-20' id='FAQ'>
      <div className='text-center'>
        <h2 className='font-bold text-xl dark:text-white'>FAQ</h2>
        <p className='font-light dark:text-white'>
          (
          {language === 'en'
            ? 'Frequently Asked Questions'
            : 'Pertanyaan yang Sering Diajukan'}
          )
        </p>
      </div>
      <div className='mx-auto mt-2 grid max-w-screen-lg divide-y divide-slate-200'>
        {faq.map((faqItem) => (
          <FAQItem key={faqItem.id} title={faqItem.title} body={faqItem.body} />
        ))}
      </div>
    </section>
  );
};
