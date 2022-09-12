import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:lavozdeguanacaste/src/components/card_post_03.dart';
import 'package:lavozdeguanacaste/src/components/selected_card_post.dart';
import 'package:lavozdeguanacaste/src/models/banner_model.dart';
import 'package:lavozdeguanacaste/src/models/post_model.dart';
import 'package:lavozdeguanacaste/src/pages/about_us_page.dart';
import 'package:lavozdeguanacaste/src/pages/contact_page.dart';
import 'package:url_launcher/url_launcher.dart';

class ListOfPost extends StatefulWidget {
  const ListOfPost({Key? key}) : super(key: key);

  @override
  State<ListOfPost> createState() => _ListOfPostState();
}

class _ListOfPostState extends State<ListOfPost> {
  late Future<List<Posts>> futurePosts;
  //late BannerModel? banners;

  @override
  void initState() {
    super.initState();

    futurePosts = getPosts();
    //banners = getBanners();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Posts>>(
        builder: ((context, snapshot) {
          if (snapshot.hasData) {
            return RefreshIndicator(
              onRefresh: () async {
                setState(() {
                  futurePosts = getPosts();
                });
              },
              child: ListView.builder(
                  itemCount: snapshot.data!.length,
                  itemBuilder: (context, index) {
                    if (index < 6) {
                      return SelectedCardPost(
                        post: snapshot.data![index],
                        index: index,
                        //banners: banners!,
                      );
                    }
                    if (index == 6) {
                      return CardPost03(
                        post01: snapshot.data![index],
                        post02: snapshot.data![index + 1],
                      );
                    }
                    if (index == 8) {
                      return Column(
                        children: [
                          CardPost03(
                            post01: snapshot.data![index],
                            post02: snapshot.data![index + 1],
                          ),
                          Divider(),
                          Container(
                            alignment: Alignment.center,
                            child: Column(
                              children: [
                                Container(
                                  padding: const EdgeInsets.only(
                                      top: 40, bottom: 20),
                                  child: ElevatedButton(
                                      onPressed: () {
                                        Navigator.push(
                                            context,
                                            MaterialPageRoute(
                                                builder: (context) =>
                                                    const AboutUs()));
                                      },
                                      child: Text(
                                        "Acerca de nosotros",
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 18),
                                      )),
                                ),
                                Container(
                                  padding: const EdgeInsets.only(bottom: 20),
                                  child: ElevatedButton(
                                      onPressed: () {
                                        Navigator.push(
                                            context,
                                            MaterialPageRoute(
                                                builder: (context) =>
                                                    const ContactPage()));
                                      },
                                      child: Text(
                                        "Contacto",
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 18),
                                      )),
                                ),
                                Container(
                                  padding: const EdgeInsets.only(bottom: 40),
                                  child: TextButton(
                                      onPressed: () {
                                        tryLaunchUrl(
                                            "https://vozdeguanacaste.com");
                                      },
                                      child: Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: [
                                          Text(
                                            "Visita Nuestra Web",
                                            style: TextStyle(
                                                fontWeight: FontWeight.bold,
                                                fontSize: 18,
                                                color: Colors.blue),
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
                              ],
                            ),
                            width: double.infinity,
                          ),
                        ],
                      );
                    }
                    return Container();
                  }),
            );
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        }),
        future: futurePosts);
  }
}

Future<void> tryLaunchUrl(url) async {
  final Uri _url = Uri.parse(url);
  if (!await launchUrl(_url)) {
    throw 'Could not launch $_url';
  }
}

Future<http.Response> fetchPosts() {
  //print("solicitando info");
  return http.get(
      Uri.parse('https://vozdeguanacaste.com/wp-json/wp/v2/posts?per_page=10'));
}

Future<http.Response> fetchBanners() async {
  //print("solicitando info");
  return await http.get(Uri.parse(
      'https://lavozdeguanacaste-app-default-rtdb.firebaseio.com/ads.json'));
}

BannerModel? getBanners() {
  fetchBanners().then((response) {
    if (response.statusCode == 200) {
      var jsonResponse = jsonDecode(response.body);
      BannerModel bans = BannerModel.fromJson(jsonResponse);
      return bans;
    } else {
      throw Exception('Failed to load post');
    }
  });
  return null;
}

Future<List<Posts>> getPosts() async {
  final response = await fetchPosts();
  if (response.statusCode == 200) {
    List<Posts> posts = [];
    List<dynamic> data = jsonDecode(response.body);
    for (var element in data) {
      var post = {
        "id": element['id'],
        "title": element["title"]["rendered"],
        "content": element["content"]["rendered"],
        "date": element["date"],
        "excerpt": element["excerpt"]["rendered"],
        "image": element["yoast_head_json"]["og_image"][0]["url"],
        "url": element["link"],
        "author": element["yoast_head_json"]["twitter_misc"]["Escrito por"],
        "readtime": element["yoast_head_json"]["twitter_misc"]
            ["Tiempo de lectura"],
      };

      posts.add(Posts.fromMap(post));
    }

    return posts;
  } else {
    throw Exception('Failed to load posts');
  }
}
