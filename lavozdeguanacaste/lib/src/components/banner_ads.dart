import 'dart:convert';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:lavozdeguanacaste/src/models/banner_model.dart';
import 'package:http/http.dart' as http;
import 'package:url_launcher/url_launcher.dart';

class BannerAds extends StatefulWidget {
  final String ban;
  BannerAds({Key? key, required this.ban}) : super(key: key);

  @override
  State<BannerAds> createState() => _BannerAdsState();
}

class _BannerAdsState extends State<BannerAds> {
  late Future<BannerModel> banner;

  @override
  void initState() {
    super.initState();
    banner = getBanners();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text("__ Publicidad __", style: TextStyle(color: Colors.black26)),
        Container(
          margin: const EdgeInsets.only(top: 10),
          child: FutureBuilder<BannerModel>(
              builder: ((context, snapshot) {
                if (snapshot.hasData) {
                  return InkWell(
                    onTap: () {
                      tryLaunchUrl(snapshot.data!.url);
                    },
                    child: Container(
                        width: double.infinity,
                        child: CachedNetworkImage(
                          fit: BoxFit.cover,
                          imageUrl: snapshot.data!.image,
                          placeholder: (context, url) => Center(
                              child: Container(
                                  height: 50,
                                  width: 50,
                                  padding: const EdgeInsets.all(10.0),
                                  child: const CircularProgressIndicator())),
                          errorWidget: (context, url, error) =>
                              const Icon(Icons.error),
                        )),
                  );
                } else {
                  return const Center(
                    child: CircularProgressIndicator(),
                  );
                }
              }),
              future: banner),
        ),
        Text(
          "_______________",
          style: TextStyle(color: Colors.black26),
        ),
        SizedBox(height: 10),
      ],
    );
  }

  Future<BannerModel> getBanners() async {
    final response = await http.get(Uri.parse(
        'https://lavozdeguanacaste-app-default-rtdb.firebaseio.com/ads/' +
            widget.ban +
            '.json'));
    if (response.statusCode == 200) {
      Map<String, dynamic> map = json.decode(response.body);
      String image = map['image'];
      String url = map['url'];

      return BannerModel.fromMap({
        'image': image,
        'url': url,
      });
    } else {
      throw Exception('Failed to load banner');
    }
  }
}

Future<void> tryLaunchUrl(url) async {
  final Uri _url = Uri.parse(url);
  if (!await launchUrl(_url)) {
    throw 'Could not launch $_url';
  }
}
