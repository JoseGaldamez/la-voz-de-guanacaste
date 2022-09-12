import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactPage extends StatelessWidget {
  const ContactPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Contacto'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            children: [
              const SizedBox(
                height: 20,
              ),
              const Text(
                'Contacto',
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(
                height: 10,
              ),
              Container(
                height: 5,
                color: Colors.yellow,
              ),
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 10),
                padding: const EdgeInsets.only(top: 10.0),
                child: const Text(
                  'Si tienes alguna duda o comentario, no dudes en contactarnos. En La voz de Guanacaste estaremos encantados de atenderte y dar respuesta a tus comentarios.',
                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 10),
                child: const Text(
                  'Puedes comunicarte con nosotros a través de los siguientes medios:',
                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),
              ),
              const SizedBox(
                height: 50,
              ),
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 30),
                width: double.infinity,
                child: ElevatedButton(
                    onPressed: () {
                      tryLaunchUrl(
                          'mailto:info@vozdeguanacaste.com?subject=Escribo%20desde%20la%20App');
                    },
                    child: Padding(
                      padding: const EdgeInsets.all(15.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.email),
                          const SizedBox(
                            width: 10,
                          ),
                          const Text('Correo electrónico'),
                        ],
                      ),
                    )),
              ),
              const SizedBox(
                height: 20,
              ),
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 30),
                width: double.infinity,
                child: ElevatedButton(
                    onPressed: () {
                      tryLaunchUrl('tel:+506 8470 2648');
                    },
                    child: Padding(
                      padding: const EdgeInsets.all(15.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.phone),
                          const SizedBox(
                            width: 10,
                          ),
                          const Text('Llamada telefónica'),
                        ],
                      ),
                    )),
              ),
              const SizedBox(
                height: 30,
              ),
              Divider(),
              const SizedBox(
                height: 30,
              ),
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 10),
                child: const Text(
                  'Lo más pronto posible nos pondremos en contacto contigo. Muchas gracias.',
                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.all(40),
                child: Image.asset("assets/la_voz_de_guanacaste_logo.png"),
              )
            ],
          ),
        ),
      ),
    );
  }
}

Future<void> tryLaunchUrl(url) async {
  final Uri _url = Uri.parse(url);
  if (!await launchUrl(_url)) {
    throw 'Could not launch $_url';
  }
}
