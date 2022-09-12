import 'package:flutter/material.dart';

class AboutUs extends StatelessWidget {
  const AboutUs({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final TextStyle _textStyle = TextStyle(
      fontSize: 18,
      color: Colors.black,
    );
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Acerca de nosotros',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              const Text(
                "¿Quiénes somos?",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                color: Colors.yellow,
                height: 5,
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "La Voz de Guanacaste es el primer periódico sin fines de lucro bilingüe de Costa Rica cuyas noticias e investigaciones son publicadas en formato impreso y digital. Nuestro objetivo es darle voz a las comunidades que raramente son representadas por los medios nacionales, mediante periodismo de calidad.",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "Todos los días, un equipo de periodistas, editores, diseñadores y fotógrafos profesionales informamos con calidad y profesionalismo a nuestros lectores, siempre de la mano y con el apoyo de nuestras redes comunales. Junto a ellas, denunciamos lo indebido, descubrimos a los responsables y, sobre todo, conectamos y visibilizamos a las comunidades de todos los rincones de la región.",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "La Voz de Guanacaste comenzó en el 2002 como La Voz de Nosara y más que un periódico, éramos un boletín impreso con noticias de la zona. En el 2006, John S. Johnson y su esposa Susan Johnson (ciudadanos estadounidenses enamorados de Costa Rica y quienes creen en la importancia de la información local), adquirieron el periódico con el fin de dar continuidad al proyecto ante el riesgo de ser cerrado. A partir del 2010,  como una forma de responder a las solicitudes de nuestros lectores, también comenzamos a publicar noticias de las comunidades vecinas de Nosara.",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "Gracias al apoyo del comercio local, el financiamiento de los Johnson y al decidido seguimiento de nuestros lectores, el medio creció y, en el  2013 nos convertimos en La Voz de Guanacaste, comenzando a darle información útil a comunidades de toda la provincia.",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "Con objetivo de mantener la integridad e independencia editorial, en el 2015, La Voz de Guanacaste se transformó en una asociación sin fines de lucro.",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 50,
              ),
              const Text(
                "Investigaciones",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                color: Colors.yellow,
                height: 5,
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "La Voz de Guanacaste es el único medio regional de Costa Rica que produce periodismo investigativo y de datos. Tenemos experiencia realizando investigaciones sobre salud, ambiente, género, política, deporte y construcción. También hemos creado aplicaciones basadas en datos analizados por nuestro equipo (ver app agua, app elecciones, app impuestos zona marítima terrestre Santa Cruz, app Agua PIAGG).",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 50,
              ),
              const Text(
                "Visión",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                color: Colors.yellow,
                height: 5,
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "Ser el medio referente de Guanacaste, que fomenta el progreso en las comunidades con periodismo responsable e innovador.",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 50,
              ),
              const Text(
                "Misión",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                color: Colors.yellow,
                height: 5,
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Text(
                  "Hacemos periodismo ético, participativo y de calidad con el compromiso de visibilizar y unir nuestras comunidades para su desarrollo.",
                  style: _textStyle,
                ),
              ),
              SizedBox(
                height: 50,
              ),
              Divider(),
              SizedBox(
                height: 20,
              ),
              Container(
                child: TextButton(
                    onPressed: () {},
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Ver más",
                          style: TextStyle(
                              color: Colors.blue,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Icon(
                          Icons.launch,
                          color: Colors.blue,
                        )
                      ],
                    )),
              ),
              SizedBox(
                height: 50,
              )
            ],
          ),
        ),
      ),
    );
  }
}
