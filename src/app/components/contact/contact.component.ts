import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input() language = 'eng';

  http = inject(HttpClient);

  contentText = [
    {
      eng: 'Contact',
      ger: 'Kontakt'
    },
    {
      eng: 'How may I help you?',
      ger: 'Wie kann ich Ihnen weiterhelfen?'
    },
    {
      eng: "Contact me using this form. I look forward to hearing from you, learning about your ideas and contributing my work to your projects.",
      ger: 'Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen'
    },
    {
      eng: 'Feel free to send me a message if you are looking for a frontend developer.',
      ger: 'Schicken Sie mir gerne eine Nachricht, wenn Sie einen Frontend-Entwickler suchen.'
    },
    {
      eng: 'Your name',
      ger: 'Ihr Name'
    },
    {
      eng: 'Your email',
      ger: 'Ihre E-Mail'
    },
    {
      eng: 'Your message',
      ger: 'Ihre Nachricht'
    },
    {
      eng: "I've read the privacy policy and agree to the processing of my data as outlined.",
      ger: 'Ich habe die Datenschutzerklärung gelesen und stimme dieser mit meinen angegeben Daten zu.'
    },
    {
      eng: 'Send message',
      ger: 'Nachricht senden'
    },
  ];

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

}
