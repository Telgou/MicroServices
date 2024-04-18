package com.example.apigateway;

import io.netty.resolver.DefaultAddressResolverGroup;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import reactor.netty.http.client.HttpClient;

import java.util.Collections;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}

	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
		return builder.routes()

				.route("restaurant", r->r.path("/restaurant/**","/serviceEntity/**","/tables/**")
						.uri("lb://restaurant/"))

				.route("reservation", r->r.path("/reservation/**","/facture/**","/tarif/**")
						.uri("lb://reservation/"))

				.route("chambre", r->r.path("/Chambre/**","/Etat/**","/historique/**")
						.uri("lb://chambre/"))

				.route("hr", r->r.path("/conge/**","/employe/**","/formation/**")
						.uri("lb://hr/"))

				.route("evaluation", r->r.path("/Evaluation/**","/Reclamation/**","/Suggestion/**")
						.uri("lb://evaluation/"))

				.build();

	}

	@Bean
	public HttpClient httpClient() {
		return HttpClient.create().resolver(DefaultAddressResolverGroup.INSTANCE);
	}


}
