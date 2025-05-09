<script lang="ts">
	import inView from '$lib/actions/inView';
	import { isDesktop } from '$lib/store';
	import { animate, stagger, timeline } from 'motion';
	import { browser } from '$app/environment';

	let sending = false;
	let error = '';
	let success = '';
	const EMAIL_TARGET = 'lsandoval@novanet.studio';

	let nameError = '';
	let lastnameError = '';
	let emailError = '';
	let phoneError = '';
	let messageError = '';

	const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;
	const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const PHONE_REGEX = /^\+?[0-9]{8,15}$/;
	const MESSAGE_REGEX = /^[a-zA-ZÀ-ÿ0-9\s@\-+.,!?()]{0,256}$/;

	function validateName(value: string): boolean {
		if (!value) {
			nameError = 'El nombre es requerido';
			return false;
		}
		if (!NAME_REGEX.test(value)) {
			nameError = 'El nombre solo debe contener letras y espacios (2-50 caracteres)';
			return false;
		}
		nameError = '';
		return true;
	}

	function validateLastname(value: string): boolean {
		if (!value) {
			lastnameError = 'El apellido es requerido';
			return false;
		}
		if (!NAME_REGEX.test(value)) {
			lastnameError = 'El apellido solo debe contener letras y espacios (2-50 caracteres)';
			return false;
		}
		lastnameError = '';
		return true;
	}

	function validateEmail(value: string): boolean {
		if (!value) {
			emailError = 'El email es requerido';
			return false;
		}
		if (!EMAIL_REGEX.test(value)) {
			emailError = 'Ingrese un email válido';
			return false;
		}
		emailError = '';
		return true;
	}

	function validatePhone(value: string): boolean {
		if (!value) {
			phoneError = 'El teléfono es requerido';
			return false;
		}
		if (!PHONE_REGEX.test(value)) {
			phoneError = 'Ingrese un número de teléfono válido (8-15 dígitos)';
			return false;
		}
		phoneError = '';
		return true;
	}

	function validateMessage(value: string): boolean {
		if (!value) {
			messageError = 'El mensaje es requerido';
			return false;
		}
		if (!MESSAGE_REGEX.test(value)) {
			messageError = 'El mensaje solo puede contener caracteres regulares';
			return false;
		}
		messageError = '';
		return true;
	}

	function validateForm(formData: FormData): boolean {
		const name = formData.get('name') as string;
		const lastname = formData.get('lastname') as string;
		const email = formData.get('email') as string;
		const phone = formData.get('phone') as string;
		const message = formData.get('message') as string;

		const isNameValid = validateName(name);
		const isLastnameValid = validateLastname(lastname);
		const isEmailValid = validateEmail(email);
		const isPhoneValid = validatePhone(phone);
		const isMessageValid = validateMessage(message);

		return isNameValid && isLastnameValid && isEmailValid && isPhoneValid && isMessageValid;
	}

	function isMobileDevice() {
		if (!browser) return false;

		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
	}

	function getEmailLink() {
		const subject = encodeURIComponent('CONTACTO DESDE FORMULARIO - AVILA MULTISPORT');

		if (isMobileDevice()) {
			return `mailto:${EMAIL_TARGET}?subject=${subject}`;
		}

		return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TARGET}&su=${subject}`;
	}

	function sendForm(_event: Event) {
		_event.preventDefault();
		error = '';

		try {
			const formData = new FormData(_event.target as HTMLFormElement);

			if (!validateForm(formData)) {
				return;
			}

			const formObject = Object.fromEntries(formData);

			const emailBody = `Nombre: ${formObject.name}
								Apellido: ${formObject.lastname}
								Teléfono: ${formObject.phone}
								Email: ${formObject.email}

								Mensaje:
								${formObject.message}
			`;

			console.log(`emailBody ${emailBody}`);

			const subject = encodeURIComponent('CONTACTO DESDE FORMULARIO - AVILA MULTISPORT');
			const body = encodeURIComponent(emailBody);

			if (isMobileDevice()) {
				const mailtoLink = `mailto:${EMAIL_TARGET}?subject=${subject}&body=${body}`;
				window.location.href = mailtoLink;
			} else {
				const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TARGET}&su=${subject}&body=${body}`;
				window.open(gmailLink, '_blank');
			}
		} catch (e) {
			error = 'Error al procesar el formulario';
		} finally {
			setTimeout(() => {
				//(_event.target as HTMLFormElement).reset();
			}, 1000);
		}
	}

	function enterAnimation() {
		timeline(
			[
				[
					'#contact',
					{
						opacity: [0, 1]
					},
					{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
				],
				[
					'#contact > div',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
							$isDesktop
								? 'polygon(0 0, 100% 0, 100% 85.4%, 0% 91.23%)'
								: 'polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)'
						]
					},
					{ duration: 0.5 }
				],
				[
					'#contact > div > h3',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.5 }
				],
				[
					'#contact > div > form > input',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: stagger(0.3) }
				],
				[
					'#contact > div > form > textarea',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.1 }
				],
				[
					'#contact > div > form > button',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.1 }
				],
				[
					'#contact-email',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.2 }
				]
			],
			{
				duration: 2.2
			}
		);
	}

	function exitAnimation() {
		animate(
			'#contact',
			{ opacity: [1, 0] },
			{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
		);
	}
</script>

<section
	id="contact"
	class="w-full h-screen snap-start relative"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={enterAnimation}
	on:exit={exitAnimation}
>
	<div class="p-8 pt-24 bg-#003B49 h-94vh md:(pt-32 p-12) lg:pl-16">
		<h3 class="mb-4 text-2xl text-#E3D268 md:text-4xl">Contáctanos</h3>
		<form class="flex flex-col gap-4 md:(gap-4 mt-8)" name="contact-form" on:submit={sendForm}>
			<input type="hidden" name="form-name" value="contact-form" />
			<div class="flex flex-col gap-4 lg:(flex-row)">
				<div class="w-full">
					<input
						required
						class="w-full"
						type="text"
						name="name"
						placeholder="Nombre"
						on:input={(e) => validateName(e.currentTarget.value)}
					/>
					{#if nameError}
						<p class="text-red-500 text-sm mt-1">{nameError}</p>
					{/if}
				</div>
				<div class="w-full">
					<input
						required
						class="w-full"
						type="text"
						name="lastname"
						placeholder="Apellido"
						on:input={(e) => validateLastname(e.currentTarget.value)}
					/>
					{#if lastnameError}
						<p class="text-red-500 text-sm mt-1">{lastnameError}</p>
					{/if}
				</div>
			</div>
			<div class="flex flex-col gap-4 lg:(flex-row)">
				<div class="w-full">
					<input
						class="w-full"
						type="email"
						name="email"
						placeholder="Email"
						on:input={(e) => validateEmail(e.currentTarget.value)}
					/>
					{#if emailError}
						<p class="text-red-500 text-sm mt-1">{emailError}</p>
					{/if}
				</div>
				<div class="w-full">
					<input
						required
						class="w-full"
						type="tel"
						name="phone"
						placeholder="Teléfono"
						on:input={(e) => validatePhone(e.currentTarget.value)}
					/>
					{#if phoneError}
						<p class="text-red-500 text-sm mt-1">{phoneError}</p>
					{/if}
				</div>
			</div>
			<div class="w-full">
				<textarea
					required
					class="w-full pt-3 pl-3"
					name="message"
					rows="4"
					placeholder="Mensaje"
					on:input={(e) => validateMessage(e.currentTarget.value)}
				></textarea>
				{#if messageError}
					<p class="text-red-500 text-sm mt-1">{messageError}</p>
				{/if}
			</div>
			{#if error}
				<p class="text-red-500">{error}</p>
			{/if}
			{#if success}
				<p class="text-green-500">{success}</p>
			{/if}
			<button class="self-start bg-#ACC37E py-2 px-12 rounded-full" disabled={sending}>
				{sending ? 'Enviando...' : 'Enviar'}
			</button>
		</form>
		<p id="contact-email" class="mt-4 text-white">
			O contáctanos directamente
			<a
				href={getEmailLink()}
				target="_blank"
				rel="noopener noreferrer"
				class="text-#E3D268 hover:underline"
			>
				{EMAIL_TARGET}
			</a>
		</p>
	</div>
</section>
