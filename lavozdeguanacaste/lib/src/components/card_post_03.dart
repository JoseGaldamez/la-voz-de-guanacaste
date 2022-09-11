import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import '../models/post_model.dart';
import '../pages/post_html_page.dart';

class CardPost03 extends StatelessWidget {
  final Posts post01;
  final Posts post02;
  const CardPost03({Key? key, required this.post01, required this.post02})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: GridView.count(
        crossAxisSpacing: 15,
        mainAxisSpacing: 10,
        crossAxisCount: 2,
        shrinkWrap: true,
        childAspectRatio: 0.9,
        physics: const NeverScrollableScrollPhysics(),
        children: [
          InkWell(
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) {
                return PostHtmlPage(post: post01);
              }));
            },
            child: Column(
              children: [
                ImagePost(post: post01),
                Padding(
                  padding: const EdgeInsets.only(top: 10.0),
                  child: Text(
                    post01.title,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          ),
          InkWell(
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) {
                return PostHtmlPage(post: post02);
              }));
            },
            child: Column(
              children: [
                ImagePost(post: post02),
                Padding(
                  padding: const EdgeInsets.only(top: 10.0),
                  child: Text(
                    post02.title,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class ImagePost extends StatelessWidget {
  const ImagePost({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Posts post;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      //color: Colors.red,
      height: 100,
      width: double.infinity,
      child: CachedNetworkImage(
        imageUrl: post.image,
        fit: BoxFit.fitWidth,
        placeholder: (context, url) => Center(
            child: Container(
                width: 100,
                height: 100,
                padding: const EdgeInsets.all(20.0),
                child: const CircularProgressIndicator())),
        errorWidget: (context, url, error) => const Icon(Icons.error),
      ),
    );
  }
}
