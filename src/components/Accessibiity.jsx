import React from 'react';
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Accessibility() {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="bg-gray-900 max-w-xl p-8 rounded-lg text-white">
        <h2 className="text-3xl font-bold tracking-tight text-white text-center">
          Accessibility Commitment
        </h2>
        <p className="mt-6 text-sm leading-8 text-gray-300 text-center">
          We are committed to ensuring that our website is accessible to everyone. If you have any questions or suggestions regarding the accessibility of this site, please contact us.
        </p>
        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300 text-center">
          <div className="flex gap-x-4 justify-center">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a className="hover:text-white" href="mailto:accessibility@example.com">
                info@ectechnologyservices.com
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4 justify-center">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <PhoneIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a className="hover:text-white" href="tel:+1 (123) 456-7890">
                +1 (714) 419-9160
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
