<script lang="ts">
	import inView from '$lib/actions/inView';
	import { isDesktop } from '$lib/store';
	import { animate, stagger, timeline } from 'motion';
	import { browser } from '$app/environment';

	let sending = false;
	let error = '';
	let success = '';
	const EMAIL_TARGET = 'lsandoval@novanet.studio';

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

			const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TARGET}&su=${subject}&body=${body}`;
			window.open(gmailLink, '_blank');
		} catch (e) {
			error = 'Error al procesar el formulario';
		} finally {
			setTimeout(() => {
				(_event.target as HTMLFormElement).reset();

				console.log('Clean form');
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
				<input required class="w-full" type="text" name="name" placeholder="Nombre" />
				<input required class="w-full" type="text" name="phone" placeholder="Teléfono" />
			</div>
			<div class="flex flex-col gap-4 lg:(flex-row)">
				<input required class="w-full" type="text" name="lastname" placeholder="Apellido" />
				<input required class="w-full" type="email" name="email" placeholder="Email" />
			</div>
			<textarea required class="pt-3 pl-3" name="message" rows="4" placeholder="Mensaje"></textarea>
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
