var N = null;var sourcesIndex = {};
sourcesIndex["paths"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ra_arena"] = {"name":"","files":["lib.rs","map.rs"]};
sourcesIndex["ra_assists"] = {"name":"","dirs":[{"name":"handlers","files":["add_custom_impl.rs","add_derive.rs","add_explicit_type.rs","add_from_impl_for_enum.rs","add_function.rs","add_impl.rs","add_missing_impl_members.rs","add_new.rs","add_turbo_fish.rs","apply_demorgan.rs","auto_import.rs","change_return_type_to_result.rs","change_visibility.rs","early_return.rs","extract_struct_from_enum_variant.rs","fill_match_arms.rs","fix_visibility.rs","flip_binexpr.rs","flip_comma.rs","flip_trait_bound.rs","inline_local_variable.rs","introduce_named_lifetime.rs","introduce_variable.rs","invert_if.rs","merge_imports.rs","merge_match_arms.rs","move_bounds.rs","move_guard.rs","raw_string.rs","remove_dbg.rs","remove_mut.rs","reorder_fields.rs","replace_if_let_with_match.rs","replace_let_with_if_let.rs","replace_qualified_name_with_use.rs","replace_unwrap_with_match.rs","split_import.rs","unwrap_block.rs"]},{"name":"utils","files":["insert_use.rs"]}],"files":["assist_config.rs","assist_context.rs","ast_transform.rs","lib.rs","utils.rs"]};
sourcesIndex["ra_cfg"] = {"name":"","files":["cfg_expr.rs","lib.rs"]};
sourcesIndex["ra_db"] = {"name":"","files":["cancellation.rs","fixture.rs","input.rs","lib.rs"]};
sourcesIndex["ra_flycheck"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ra_fmt"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ra_hir"] = {"name":"","dirs":[{"name":"semantics","files":["source_to_def.rs"]}],"files":["code_model.rs","db.rs","diagnostics.rs","from_id.rs","has_source.rs","lib.rs","semantics.rs","source_analyzer.rs"]};
sourcesIndex["ra_hir_def"] = {"name":"","dirs":[{"name":"body","files":["lower.rs","scope.rs"]},{"name":"nameres","files":["collector.rs","mod_resolution.rs","path_resolution.rs","raw.rs"]},{"name":"path","dirs":[{"name":"lower","files":["lower_use.rs"]}],"files":["lower.rs"]}],"files":["adt.rs","attr.rs","body.rs","builtin_type.rs","child_by_source.rs","data.rs","db.rs","diagnostics.rs","docs.rs","dyn_map.rs","expr.rs","find_path.rs","generics.rs","import_map.rs","item_scope.rs","keys.rs","lang_item.rs","lib.rs","nameres.rs","path.rs","per_ns.rs","resolver.rs","src.rs","trace.rs","type_ref.rs","visibility.rs"]};
sourcesIndex["ra_hir_expand"] = {"name":"","files":["ast_id_map.rs","builtin_derive.rs","builtin_macro.rs","db.rs","diagnostics.rs","eager.rs","hygiene.rs","lib.rs","name.rs","proc_macro.rs","quote.rs"]};
sourcesIndex["ra_hir_ty"] = {"name":"","dirs":[{"name":"infer","files":["coerce.rs","expr.rs","pat.rs","path.rs","unify.rs"]},{"name":"traits","dirs":[{"name":"chalk","files":["interner.rs","mapping.rs","tls.rs"]}],"files":["builtin.rs","chalk.rs"]}],"files":["_match.rs","autoderef.rs","db.rs","diagnostics.rs","display.rs","expr.rs","infer.rs","lib.rs","lower.rs","method_resolution.rs","op.rs","primitive.rs","traits.rs","utils.rs"]};
sourcesIndex["ra_ide"] = {"name":"","dirs":[{"name":"completion","files":["complete_attribute.rs","complete_dot.rs","complete_fn_param.rs","complete_keyword.rs","complete_macro_in_item_position.rs","complete_pattern.rs","complete_postfix.rs","complete_qualified_path.rs","complete_record.rs","complete_snippet.rs","complete_trait_impl.rs","complete_unqualified_path.rs","completion_config.rs","completion_context.rs","completion_item.rs","patterns.rs","presentation.rs"]},{"name":"display","files":["function_signature.rs","navigation_target.rs","short_label.rs","structure.rs"]},{"name":"references","files":["rename.rs"]},{"name":"syntax_highlighting","files":["html.rs","injection.rs","tags.rs"]},{"name":"typing","files":["on_enter.rs"]}],"files":["call_hierarchy.rs","call_info.rs","completion.rs","diagnostics.rs","display.rs","expand_macro.rs","extend_selection.rs","folding_ranges.rs","goto_definition.rs","goto_implementation.rs","goto_type_definition.rs","hover.rs","inlay_hints.rs","join_lines.rs","lib.rs","matching_brace.rs","mock_analysis.rs","parent_module.rs","prime_caches.rs","references.rs","runnables.rs","ssr.rs","status.rs","syntax_highlighting.rs","syntax_tree.rs","typing.rs"]};
sourcesIndex["ra_ide_db"] = {"name":"","files":["change.rs","defs.rs","imports_locator.rs","lib.rs","line_index.rs","search.rs","source_change.rs","symbol_index.rs","wasm_shims.rs"]};
sourcesIndex["ra_mbe"] = {"name":"","dirs":[{"name":"mbe_expander","files":["matcher.rs","transcriber.rs"]}],"files":["lib.rs","mbe_expander.rs","parser.rs","subtree_source.rs","syntax_bridge.rs","tt_iter.rs"]};
sourcesIndex["ra_parser"] = {"name":"","dirs":[{"name":"grammar","dirs":[{"name":"expressions","files":["atom.rs"]},{"name":"items","files":["adt.rs","consts.rs","traits.rs","use_item.rs"]}],"files":["attributes.rs","expressions.rs","items.rs","params.rs","paths.rs","patterns.rs","type_args.rs","type_params.rs","types.rs"]},{"name":"syntax_kind","files":["generated.rs"]}],"files":["event.rs","grammar.rs","lib.rs","parser.rs","syntax_kind.rs","token_set.rs"]};
sourcesIndex["ra_proc_macro"] = {"name":"","files":["lib.rs","msg.rs","process.rs","rpc.rs"]};
sourcesIndex["ra_proc_macro_srv"] = {"name":"","dirs":[{"name":"proc_macro","dirs":[{"name":"bridge","files":["buffer.rs","client.rs","closure.rs","handle.rs","mod.rs","rpc.rs","scoped_cell.rs","server.rs"]}],"files":["diagnostic.rs","mod.rs"]}],"files":["cli.rs","dylib.rs","lib.rs","rustc_server.rs"]};
sourcesIndex["ra_prof"] = {"name":"","files":["hprof.rs","lib.rs","memory_usage.rs","tree.rs"]};
sourcesIndex["ra_project_model"] = {"name":"","files":["cargo_workspace.rs","json_project.rs","lib.rs","sysroot.rs"]};
sourcesIndex["ra_syntax"] = {"name":"","dirs":[{"name":"ast","dirs":[{"name":"generated","files":["nodes.rs","tokens.rs"]}],"files":["edit.rs","expr_extensions.rs","extensions.rs","generated.rs","make.rs","tokens.rs","traits.rs"]},{"name":"parsing","files":["lexer.rs","reparsing.rs","text_token_source.rs","text_tree_sink.rs"]},{"name":"validation","files":["block.rs"]}],"files":["algo.rs","ast.rs","fuzz.rs","lib.rs","parsing.rs","ptr.rs","syntax_error.rs","syntax_node.rs","validation.rs"]};
sourcesIndex["ra_text_edit"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ra_toolchain"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ra_tt"] = {"name":"","files":["buffer.rs","lib.rs"]};
sourcesIndex["rust_analyzer"] = {"name":"","dirs":[{"name":"cli","files":["analysis_bench.rs","analysis_stats.rs","diagnostics.rs","load_cargo.rs","progress_report.rs"]},{"name":"diagnostics","files":["to_proto.rs"]},{"name":"main_loop","files":["handlers.rs","pending_requests.rs","subscriptions.rs"]}],"files":["caps.rs","cargo_target_spec.rs","cli.rs","config.rs","diagnostics.rs","from_proto.rs","global_state.rs","lib.rs","lsp_ext.rs","main_loop.rs","markdown.rs","semantic_tokens.rs","to_proto.rs","vfs_glob.rs"]};
sourcesIndex["stdx"] = {"name":"","files":["lib.rs"]};
sourcesIndex["test_utils"] = {"name":"","files":["lib.rs","mark.rs"]};
sourcesIndex["vfs"] = {"name":"","files":["file_set.rs","lib.rs","loader.rs","path_interner.rs","vfs_path.rs","walkdir_loader.rs"]};
sourcesIndex["xtask"] = {"name":"","dirs":[{"name":"codegen","files":["gen_assists_docs.rs","gen_feature_docs.rs","gen_parser_tests.rs","gen_syntax.rs"]}],"files":["ast_src.rs","codegen.rs","dist.rs","install.rs","lib.rs","not_bash.rs","pre_commit.rs","release.rs"]};
createSourceSidebar();
